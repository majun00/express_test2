var entries=[
	{"id":1, "title":"第一篇", "body":"正文", "published":"7/2/2017"},
    {"id":2, "title":"第二篇", "body":"正文", "published":"7/3/2017"},
    {"id":3, "title":"第三篇", "body":"正文", "published":"7/4/2017"},
    {"id":4, "title":"第四篇", "body":"正文", "published":"7/5/2017"},
    {"id":5, "title":"第五篇", "body":"正文", "published":"7/10/2017"},
    {"id":6, "title":"第六篇", "body":"正文", "published":"7/12/2017"}
]
exports.getBlogEntries=function(){
	return entries;
}
exports.getBlogEntry=function(id){
	for (var i = 0; i < entries.length; i++) {
		if(entries[i].id==id) return entries[i]
	}
}