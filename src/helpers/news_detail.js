module.exports = function(ops) {
    var that = this;
    var _new = this.data.news.find(function(item) {
        return item.id == that.page;
    });
    if (_new) {
        _new.content = _new.content.replace(/\r\n/g, "<br>");
    }
    return ops.fn(_new);
}