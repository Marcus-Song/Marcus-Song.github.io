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