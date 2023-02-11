// const socket = io.connect("/");

// socket.on("BUY_GOODS", function (data) {
//   const { nickname, goodsId, goodsName, date } = data;
//   makeBuyNotification(nickname, goodsName, goodsId, date);
// });

function initAuthenticatePage() {
  // socket.emit("CHANGED_PAGE", `${location.pathname}${location.search}`);
}

function bindSamePageViewerCountEvent(callback) {
  // socket.on("SAME_PAGE_VIEWER_COUNT", callback);
}

function postOrder(user, order) {
  if (!order.length) {
    return;
  }

  // socket.emit("BUY", {
  //   nickname: user.nickname,
  //   goodsId: order[0].goods.goodsId,
  //   goodsName:
  //     order.length > 1
  //       ? `${order[0].goods.name} 외 ${order.length - 1}개의 상품`
  //       : order[0].goods.name,
  // });
}

function getSelf(callback) {
  $.ajax({
    type: "GET",
    url: "/api/users/me",
    success: function (response) {
      callback(response.user);
    },
    error: function (xhr, status, error) {
      if (status == 401) {
        alert("로그인이 필요합니다.");
      } else {
        localStorage.clear();
        alert("알 수 없는 문제가 발생했습니다. 관리자에게 문의하세요.");
      }
      window.location.href = "/";
    },
  });
}

function getGoods(category, callback) {
  $("#goodsList").empty();
  $.ajax({
    type: "GET",
    url: `/api/goods${category ? "?category=" + category : ""}`,
    success: function (response) {
      callback(response["goods"]);
    },
  });
}

function signOut() {
  localStorage.clear();
  window.location.href = "/";
}

function getGoodsDetail(goodsId, callback) {
  $.ajax({
    type: "GET",
    url: `/api/goods/${goodsId}`,
    error: function (xhr, status, error) {
      if (status == 401) {
        alert("로그인이 필요합니다.");
      } else if (status == 404) {
        alert("존재하지 않는 상품입니다.");
      } else {
        alert("알 수 없는 문제가 발생했습니다. 관리자에게 문의하세요.");
      }
      window.location.href = "/goods";
    },
    success: function (response) {
      callback(response.goods);
    },
  });
}

function makeBuyNotification(targetNickname, goodsName, goodsId, date) {
  const messageHtml = `${targetNickname}님이 방금 <a href="/detail.html?goodsId=${goodsId}" class="alert-link">${goodsName}</a>을 구매했어요! <br /><small>(${date})</small>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>`;
  const alt = $("#customerAlert");
  if (alt.length) {
    alt.html(messageHtml);
  } else {
    const htmlTemp = `<div class="alert alert-sparta alert-dismissible show fade" role="alert" id="customerAlert">${messageHtml}</div>`;
    $("body").append(htmlTemp);
  }
}

function addToCart(goodsId, quantity, callback) {
  $.ajax({
    type: "POST",
    url: `/api/goods/${goodsId}/cart`,
    data: {
      quantity,
    },
    error: function (xhr, status, error) {
      if (status == 400) {
        alert("존재하지 않는 상품입니다.");
      }
      window.location.href = "/goods.html";
    },
    success: function () {
      callback();
    },
  });
}

function changeToCart(goodsId, quantity, callback) {
  $.ajax({
    type: "PUT",
    url: `/api/goods/${goodsId}/cart`,
    data: {
      quantity,
    },
    error: function (xhr, status, error) {
      if (status == 400) {
        alert("존재하지 않는 상품입니다.");
      }
      window.location.href = "/goods.html";
    },
    success: function () {
      callback();
    },
  });
}

function buyLocation(params) {
  sessionStorage.setItem("ordered", JSON.stringify(params));
  location.href = "order.html";
}

function getCarts(callback) {
  $.ajax({
    type: "GET",
    url: `/api/goods/cart`,
    success: function (response) {
      callback(response.carts);
    },
  });
}

function deleteCart(goodsId, callback) {
  $.ajax({
    type: "DELETE",
    url: `/api/goods/${goodsId}/cart`,
    success: function () {
      callback();
    },
  });
}
