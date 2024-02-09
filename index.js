const username = 'N3XUof';
const token = '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';

fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
        'Authorization': `token ${token}`
    }
})
.then(response => response.json())
.then(repos => {
    const githubPostsElement = document.getElementById('github-posts');

    repos.forEach(repo => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${repo.name}</strong>: ${repo.description}`;
        githubPostsElement.appendChild(listItem);
    });
})
.catch(error => {
    console.error('Erro ao recuperar postagens do GitHub:', error);
});
