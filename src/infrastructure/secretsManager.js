// In production, this would connect to HashiCorp Vault.
// For now, it secures the process.env access.
class SecretsManager {
    get(key) {
        const val = process.env[key];
        if (!val) throw new Error(`CRITICAL: Missing Secret ${key}`);
        return val;
    }
}
module.exports = new SecretsManager();
