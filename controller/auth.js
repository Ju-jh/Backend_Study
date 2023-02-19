import AuthService from '../services/auth.js';

class AuthController {
    authService = new AuthService();

    signup = async (req, res) => {
        const { nickname, password, confirm } = req.body;
        await this.authService.createUserService(
            nickname,
            password,
            confirm,
            res
        );
    };

    login = async (req, res) => {
        const { nickname, password } = req.body;
        await this.authService.loginUserService(nickname, password, res);
    };
}

export default AuthController;
