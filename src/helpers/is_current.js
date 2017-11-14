module.exports = function(val, ops) {
    console.log(this.page);
    var cls = (this.page === val || (val === "news" && /\d+/.test(this.page))) ? "current" : ""
    return cls;
}