﻿$(function () {
    new Vue({
        el: "#app",
        delimiters: ['[[', ']]'],
        data: {
            tags: ['java', 'html', 'python', '小程序', '数据库', 'linux','ubuntu','android','云原生','后端','javascript','centos','hadoop','GUI','线程','sql','面试']
        },
        computed: {},
        methods: {
            Addtag: function () {
                var tagname = $("input[name='tagname']").val();
                if (tagname.length === 0) {
                    swal('请输入标签名！');
                    return
                }
                if($.inArray(tagname,this.tags) == -1){
                    this.tags.push(tagname);
                }else{
                    swal('标签已存在,无需重复添加','','error'
                    )
                }

            }
        }
    })
})


$(function () {
    var myeditor = fun();
    myeditor.create();
    $("#submit-btn").click(function () {
        var content = myeditor.txt.html();
        var title = $("input[name='title']").val();
        if(title.length==0){
            swal('请输入标题')
            return;
        }
        console.log(content.length)
        if(content.length==11|content.length==4){
            swal('请输入内容')
            return;
        }
            var tags = []
            $.each($('input:checkbox:checked'),function(){
                tags.push($(this).val())
            });
            if(tags.length>3){
                swal('最多添加选3个标签哦~')
                return;
            }
            if(tags.length<1){
                swal('至少添加一个标签o ~')
                return;
            }
            tags = tags.toString()
        zlajax.post({
            'url': '/apost/',
                traditional: true,
            'data': {
                'content': content,
                'title': title,
                'tags':tags
            },
            'success': function (data) {
                if (data['code'] == 200) {
                    swal('发表成功');
  			setTimeout(function () {
                        window.location.href = '/'
                    })
                } else {
                    swal('发表失败', '', 'error')
                }
            }
        })

    })
})