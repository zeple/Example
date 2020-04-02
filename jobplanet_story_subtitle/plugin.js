/*
*
*   Plugin developed by Dimitri Conejo
*   www.dimitriconejo.com
*
*/

CKEDITOR.plugins.add( 'jobplanetStorySubtitle', {
    icons: 'jobplanetStorySubtitle',
    init: function(editor) {
        editor.addCommand('insertJobplanetStorySubtitle', {
            exec: function(editor) {
                var tag = editor.elementPath().contains(function(el){
                    return el.$.tagName == 'DIV' && el.$.className == 'subtext'
                });

                if (!tag) {
                    var range = editor.getSelection().getRanges()[0];
                    var el = editor.document.createElement('div');
                    var html = '이곳에 소제목을 입력해 주세요';

                    if (range && range.cloneContents().getHtml()) {
                        el.append(range.cloneContents());
                        html = el.getHtml();
                    }

                    var element = CKEDITOR.dom.element.createFromHtml('<div class="subtext">' + html + '</div>');

                    editor.insertElement(element);
                } else {
                    var html = tag.getHtml();
                    tag.remove();
                    editor.insertHtml(html);
                }
            }
        });

        editor.ui.addButton( 'JobplanetStorySubtitle', {
            label: '소제목으로 감싸거나 영역을 추가합니다.',
            command: 'insertJobplanetStorySubtitle',
            icon: CKEDITOR.plugins.getPath('jobplanetStorySubtitle') + 'icons/icon.png'
        });
    }
});
