module.exports = function(ops) {
    var that = this;
    var _new = /\d+/.test(this.page) && this.root === '../../' && this.data.news.find(function(item) {
        return item.id == that.page;
    });
    var _tmp = _new || { title: "海南美游科技有限公司", desc: "海南美游科技有限公司" };
    return ops.fn(_tmp);
}