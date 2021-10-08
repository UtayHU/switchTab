function switchTab(tabParent = 'parent-tab', contentClass = 'сontent-item', tabClass = 'tab-item', classShow = 'show', classHide = 'hide') {
    let content = document.querySelectorAll('.' + contentClass),
        tab = document.querySelectorAll('.' + tabClass),
        parent = document.querySelector('.' + tabParent);
    if (tab.length != content.length) {
        console.log('%cswitchTab: Кількість табів (' + tabClass + ') не відповідає кількості блоків контенту (' + contentClass + ')', 'background: #222; color: #eb4034');
        return;
    }

    function showContent(a = 0) {
        for (let i = 0; i < content.length; i++) {
            content[i].classList.remove(classShow);
            content[i].classList.add(classHide);
        }
        content[a].classList.add(classShow);
    }
    showContent();
    parent.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains(tabClass)) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showContent(i);
                    break;
                }
            }
        }
    });
}
switchTab();