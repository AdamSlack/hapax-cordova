Feature('Blog Page');

Scenario('When accessing the blog page from the home page', ({ I }) => {
    I.click('/html/body/div[1]/nav/div[1]/div[2]/div/div[8]/a')
    I.click('~Blog')
    I.see('Blog Posts')
    I.see ('NextUI + React Hook Form')
});
