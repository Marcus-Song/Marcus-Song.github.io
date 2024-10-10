console.log("Personal webpage loaded successfully!");

document.addEventListener('DOMContentLoaded', function() {
    const emailIcon = document.getElementById('email-icon');
    const viewResumeLink = document.getElementById('view-resume-link');
    
    emailIcon.addEventListener('click', function(e) {
        e.preventDefault(); // 阻止默认的链接行为
        
        const email = 'wes102@pitt.edu';
        const subject = 'Hello from your website'; // 预设的邮件主题
        const body = 'Hi Marcus,\n\n'; // 预设的邮件正文
        
        // 创建 mailto 链接
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // 打开默认邮件客户端
        window.location.href = mailtoLink;
    });

    viewResumeLink.addEventListener('click', function(e) {
        e.preventDefault();
        const resumeUrl = 'resources/Weifeng_Song_Resume.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Weifeng_Song_Resume.pdf'; // 下载名称
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const greetingElement = document.getElementById('greeting');
    const nameElement = document.getElementById('name');
    const subtitleElement = document.getElementById('subtitle');

    const greeting = "Hi! My name is";
    const name = "MARCUS";
    const subtitle = "I am a <strong class='highlight'>Computer Science</strong> student at <strong class='highlight'>University of Pittsburgh</strong>";

    // 立即开始打字 greeting
    typeWriter(greetingElement, greeting, 0, 50);

    // 在 greeting 完成后开始打字 name
    setTimeout(() => {
        typeWriter(nameElement, name, 0, 100);
    }, greeting.length * 50 + 500);

    // 在 name 完成后开始打字 subtitle
    setTimeout(() => {
        typeWriter(subtitleElement, subtitle, 0, 50);
    }, (greeting.length + name.length) * 50 + 1000);
});

function typeWriter(element, text, i, speed) {
    if (i < text.length) {
        if (text.substr(i, 7) === '<strong') {
            let endIndex = text.indexOf('</strong>', i) + 9;
            element.innerHTML += text.substring(i, endIndex);
            i = endIndex;
        } else {
            element.innerHTML += text.charAt(i);
            i++;
        }
        setTimeout(() => typeWriter(element, text, i, speed), speed);
    }
}