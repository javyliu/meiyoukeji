module.exports = function(val, ops) {
    var cls = (this.page === val || (val === "news" && /\d+/.test(this.page))) ? "current" : ""
    return cls;
}