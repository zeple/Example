/*
*
*   Plugin developed by Dimitri Conejo
*   www.dimitriconejo.com
*
*/

CKEDITOR.plugins.add( 'jobplanetStoryParagraph', {
    icons: 'jobplanetStoryParagraph',
    init: function(editor) {
        editor.addCommand('insertJobplanetStoryParagraph', {
            exec: function(editor) {
                var tag = editor.elementPath().contains(function(el){
                    return el.$.tagName == 'DIV' && el.$.className == 'jplyst_section'
                });

                if (!tag) {
                    var range = editor.getSelection().getRanges()[0];
                    var el = editor.document.createElement('div');
                    var html = '문단 영역입니다.';

                    if (range && range.cloneContents().getHtml()) {
                        el.append(range.cloneContents());
                        html = el.getHtml();
                    }

                    var element = CKEDITOR.dom.element.createFromHtml('<div class="jplyst_section">' + html + '</div>');

                    editor.insertElement(element);
                } else {
                    var html = tag.getHtml();
                    tag.remove();
                    editor.insertHtml(html);
                }
            }
        });

        editor.ui.addButton( 'JobplanetStoryParagraph', {
            label: '문단으로 감싸거나 영역을 추가합니다.',
            command: 'insertJobplanetStoryParagraph',
            icon: CKEDITOR.plugins.getPath('jobplanetStoryParagraph') + 'icons/icon.png'
        });
    }
});
