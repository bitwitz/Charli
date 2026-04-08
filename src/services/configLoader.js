module.exports = {
    load: (key) => process.env[key] || null
};
