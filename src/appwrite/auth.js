import config from "../config/config";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const user = await this.account.create(ID.unique(), email, password, name);
      console.log(user);
      if (user) {
        // We will login user here
        console.log("entry");
        return this.loginUser(email, password);
      } else {
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async loginUser({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return session;
    } catch (error) {
      console.log(error);
    }
  }

  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: gettUser :: error", error);
    }

    return null;
  }

  async logOut() {
    try {
       await this.account.deleteSessions();
    } catch (error) {
      console.log(error);
    }
  }
}

const authService = new AuthService();

export default authService;
