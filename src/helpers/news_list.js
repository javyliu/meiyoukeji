module.exports = function(ops) {
    var that = this;
    var _new = this.data.news.find(function(item) {
        return item.id == that.page;
    });
    var sub_nav = {};
    if (_new) {
        sub_nav.list = this.data.news.filter(function(item) { return item.cate_id === _new.cate_id });
        sub_nav.cate = this.data.cates[_new.cate_id];
    }
    return ops.fn(sub_nav);
}