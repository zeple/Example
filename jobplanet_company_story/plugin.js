CKEDITOR.plugins.add( 'jobplanetCompanyStory', {
    icons: 'jobplanetCompanyStory',
    init: function(editor) {
        var findElementClosest = function(tag_name, class_name) {
            return editor.elementPath().contains(function(el){
                return el.$.tagName.toLowerCase() == tag_name.toLowerCase()
                        && el.$.className.toLowerCase() == class_name.toLowerCase();
            });
        }

        var getInnerHtml = function() {
            var range = editor.getSelection().getRanges()[0];
            var el = editor.document.createElement('div');
            var html = '';

            if (range && range.cloneContents().getHtml()) {
                el.append(range.cloneContents());
                html = el.getHtml();
            }

            return html;
        }

        var createElement = function(html) {
            var el = editor.document.createElement('div');
            el.appendHtml(html);
            return el.getFirst();
        }

        var createSection = function(html) {
            return createElement('<div class="jplyst_section">' + html + '</div>')
        }

        var createTitle = function(html) {
            return createElement('<div class="subtext">' + html + '</div>');
        }

        var createDescription = function(html) {
            return createElement('<div class="description">' + html + '</div>');
        }

        var createCopyright = function() {
            return createElement('<div class="jplyst_copyright"><div class="jplyst_text">저작권은 #########에 있으며, 무단 배포를 금지합니다.</div></div>');
        }

        editor.addCommand('insertJobplanetCompanyStoryBlock', {
            exec: function(editor) {
                var section = createSection('');
                var title = createTitle('제목을 입력해 주세요');
                var description = createDescription('내용을 입력해 주세요');

                section.append(title);
                section.append(description);
                editor.insertElement(section);
            }
        });

        editor.addCommand('insertJobplanetCompanyStorySection', {
            exec: function(editor) {
                var tag = findElementClosest('div', 'jplyst_section');
                
                if (tag) {
                    tag.remove();
                } else {
                    var html = getInnerHtml() || '문단영역입니다';
                    var element = createSection(html);

                    editor.insertElement(element);
                }
            }
        });

        editor.addCommand('insertJobplanetCompanyStoryTitle', {
            exec: function(editor) {
                var tag = findElementClosest('div', 'subtext');

                if (tag) {
                    tag.remove();
                } else {
                    var html = getInnerHtml() || '제목을 입력해 주세요';
                    var element = createTitle(html);
                    editor.insertElement(element);
                }
            }
        });

        editor.addCommand('insertJobplanetCompanyStoryDescription', {
            exec: function(editor) {
                var tag = findElementClosest('div', 'description');

                if (tag) {
                    tag.remove();
                } else {
                    var html = getInnerHtml() || '내용을 입력해 주세요';
                    var element = createDescription(html);
                    editor.insertElement(element);
                }
            }
        });

        editor.addCommand('insertJobplanetCompanyStoryCopyright', {
            exec: function(editor) {
                var tag = findElementClosest('div', 'jplyst_copyright');

                if (tag) {
                    tag.remove();
                } else {
                    var element = createCopyright();
                    editor.insertElement(element);
                }
            }
        });

        editor.ui.addButton( 'JobplanetCompanyStoryBlock', {
            label: '템플릿을 추가합니다.',
            command: 'insertJobplanetCompanyStoryBlock',
            icon: CKEDITOR.plugins.getPath('jobplanetCompanyStory') + 'icons/icon.png'
        });

        editor.ui.addButton( 'JobplanetCompanyStorySection', {
            label: '문단으로 감싸거나 영역을 추가합니다.',
            command: 'insertJobplanetCompanyStorySection',
            icon: CKEDITOR.plugins.getPath('jobplanetCompanyStory') + 'icons/icon.png'
        });

        editor.ui.addButton( 'JobplanetCompanyStoryTitle', {
            label: '소제목으로 감싸거나 영역을 추가합니다.',
            command: 'insertJobplanetCompanyStoryTitle',
            icon: CKEDITOR.plugins.getPath('jobplanetCompanyStory') + 'icons/icon.png'
        });

        editor.ui.addButton( 'JobplanetCompanyStoryDescription', {
            label: '본문을 감싸거나 영역을 추가합니다.',
            command: 'insertJobplanetCompanyStoryDescription',
            icon: CKEDITOR.plugins.getPath('jobplanetCompanyStory') + 'icons/icon.png'
        });

        editor.ui.addButton( 'JobplanetCompanyStoryCopyright', {
            label: '저작권 표시를 감싸거나 영역을 추가합니다.',
            command: 'insertJobplanetCompanyStoryCopyright',
            icon: CKEDITOR.plugins.getPath('jobplanetCompanyStory') + 'icons/icon.png'
        });
    }
});
