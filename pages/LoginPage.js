const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        this.username = '#user-name';
        this.password = '#password';
        this.loginButton = '#login-button';
    }

    async login(user, pass) {
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;