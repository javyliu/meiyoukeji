module.exports = function(value, ops) {
    // console.log(ops);
    // console.log(ops.data);
    console.log(this.data.company_news)
    return "<strong>" + ops.fn(this) + "</strong>";
}