const users = [
    {
        id: 1,
        name: "Kien Dang",
    },
    {
        id: 2,
        name: "Son Dang",
    },
    {
        id: 3,
        name: "Minh Pham",
    },
];

const comments = [
    { id: 1, userId: 1, content: "Have you completed video?" },
    { id: 2, userId: 2, content: "It just has been completed!" },
];

//Fake API
function getComments() {
    return new Promise(function (resole) {
        setTimeout(() => {
            resole(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function (resole) {
        setTimeout(() => {
            const result = users.filter((user) => userIds.includes(user.id));
            resole(result);
        }, 1000);
    });
}

console.log("Start");

getComments()
    .then((comments) => {
        const userIds = comments.map((comment) => {
            return comment.userId;
        });

        return getUsersByIds(userIds).then((users) => {
            return { users, comments };
        });
    })
    .then((data) => {
        // console.log(data);
        const commentBlock = document.getElementById("comment-block");
        let html = "";
        data.comments.forEach((comment) => {
            const user = data.users.find((user) => user.id === comment.userId);
            // console.log(user);
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    });
