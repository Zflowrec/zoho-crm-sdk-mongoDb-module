
import * as storage from "node-persist";
export class ZohoTokenPersist {
    constructor() {
        storage.init();
    }
    public async saveOAuthTokens(obj: any) {
        return await storage.setItem('zsdk-tokens', obj);
    }
    public async   getOAuthTokens() {
        return await storage.getItem('zsdk-tokens');
    }
    public updateOAuthTokens(obj: any) {
        return this.saveOAuthTokens(obj);
    }
}
