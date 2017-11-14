module.exports = function(cate_name, ops) {
    // console.log(ops);
    // console.log(ops.data);
    // console.log(this.data.company_news)
    var _news_cate = Object.assign({}, this.data.cates[cate_name]);
    var _new = this.data.news.find(function(item) {
        return item.id === _news_cate.news_id;
    });
    if (_new) {
        _news_cate.desc = _new.desc;
        _news_cate.publish_time = _new.publish_time;
    }
    return ops.fn(_news_cate);
}