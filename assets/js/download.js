// JavaScript 函数用于滚动页面到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
}

// 监听页面滚动事件，控制按钮显示与隐藏
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}
document.querySelectorAll('.tree details summary').forEach(function (summary) {
    summary.addEventListener('click', function () {
        // 获取点击的details元素
        var details = this.parentElement;

        // 获取与点击的details同级的所有details元素
        var siblings = details.parentElement.querySelectorAll('details');

        // 遍历所有同级details元素，关闭除了点击的之外的其他details
        siblings.forEach(function (sibling) {
            if (sibling !== details) {
                sibling.removeAttribute('open');
            }
        });
    });
});
// JavaScript function to scroll to the target element
function scrollToTarget(targetId) {
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", offset: 50 });
    }
}