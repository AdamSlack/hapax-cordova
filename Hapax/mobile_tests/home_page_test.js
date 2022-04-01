Feature('Home Page');

Scenario('When accessing the home page', ({ I }) => {
    I.see('Hapax.xyz')
    I.see('Full stack engineering')
    I.see('End-to-end solutions')
});
