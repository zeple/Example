/*
*
*   Plugin developed by Dimitri Conejo
*   www.dimitriconejo.com
*
*/

CKEDITOR.plugins.add( 'jobplanetStoryDescription', {
    icons: 'jobplanetStoryDescription',
    init: function(editor) {
        editor.addCommand('insertJobplanetStoryDescription', {
            exec: function(editor) {
                var tag = editor.elementPath().contains(function(el){
                    return el.$.tagName == 'DIV' && el.$.className == 'description'
                });

                if (!tag) {
                    var range = editor.getSelection().getRanges()[0];
                    var el = editor.document.createElement('div');
                    var html = '이곳에 내용을 입력해 주세요';

                    if (range && range.cloneContents().getHtml()) {
                        el.append(range.cloneContents());
                        html = el.getHtml();
                    }

                    var element = CKEDITOR.dom.element.createFromHtml('<div class="description">' + html + '</div>');

                    editor.insertElement(element);
                } else {
                    var html = tag.getHtml();
                    tag.remove();
                    editor.insertHtml(html);
                }
            }
        });

        editor.ui.addButton( 'JobplanetStoryDescription', {
            label: '본문을 감싸거나 영역을 추가합니다.',
            command: 'insertJobplanetStoryDescription',
            icon: CKEDITOR.plugins.getPath('jobplanetStoryDescription') + 'icons/icon.png'
        });
    }
});