const state = {
    MessagesPage: {
        DialogsData: [
            {
                id: 1,
                name: "Julia",
                image: {
                    src: 'https://posworkshop.space/img/posworkshop-avatar-gopher.png',
                    alt: 'avatar image'
                }
            },
            {
                id: 2,
                name: "Petya",
                image: {
                    src: 'https://img.favpng.com/19/22/15/emoticon-yellow-beak-smile-png-favpng-utrNZkBzDVz34pM6S1AdLViNe.jpg',
                    alt: 'avatar image'
                }
            },
            {
                id: 3,
                name: "Iana",
                image: {
                    src: 'https://img.favpng.com/19/10/4/github-computer-icons-electron-computer-software-clip-art-png-favpng-wXmk1g6TwKQuTrcw3UmC8B7Qm.jpg',
                    alt: 'avatar image'
                }
            },
            {
                id: 4,
                name: "Sveta",
                image: {
                    src: 'https://api.adorable.io/avatars/400/abott@adorable.io.png',
                    alt: 'avatar image'
                }
            },
            {
                id: 5,
                name: "Kate",
                image: {
                    src: 'https://lh3.googleusercontent.com/proxy/vJAZw7Mv1cBFnwZ0Urwy3e20Cb4xk3Jm47a09Mh9hpfCdZV73iH7M0zq2ICqfy714RkpBuGIkiCFLx6I4Gbw_rih',
                    alt: 'avatar image'
                }
            },
            {
                id: 6,
                name: "Alex",
                image: {
                    src: 'https://lh3.googleusercontent.com/proxy/0TfcsTCkoBiXs7znrVodEV674kkceuJ_-YmmK-evB5W6m5HQedzLr1Dzq-dQeXbCY2Gi3a06BXJDbROXvPsobz7wgdcw0uqIJJb6ftM3Hck3',
                    alt: 'avatar image'
                }
            },
        ],
        messagesData: [
            {
                id: 1,
                message: "Hi there!"
            },
            {
                id: 2,
                message: "Yo"
            },
            {
                id: 3,
                message: "What's up!"
            },
        ],
    },
    ProfilePage: {
        postsData: [
            {
                id: 1,
                post: "Hi there!",
                likesCount: 2,
                image: {
                    src: 'https://picturepan2.github.io/spectre/img/avatar-2.png',
                    alt: 'Avatar image',
                }
            },
            {
                id: 2,
                post: "It's my first post",
                likesCount: 5,
                image: {
                    src: 'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
                    alt: 'Avatar image',
                }

            },
            {
                id: 3,
                post: "Press like!",
                likesCount: 102,
                image: {
                    src: 'https://avatars1.githubusercontent.com/u/109951?s=400&v=4',
                    alt: 'Avatar image',
                }
            }
        ]
    },
    SideBar: {
        FriendsPage: [
            {
                image: {
                    src: 'https://posworkshop.space/img/posworkshop-avatar-gopher.png',
                    alt: 'Julia avatar photo'
                },
                id: 1,
                name: 'Julia'
            },
            {
                image: {
                    src: 'https://avatars1.githubusercontent.com/u/109951?s=400&v=4',
                    alt: 'Kate avatar photo'
                },
                id: 3,
                name: 'Kate'
            },
            {
                image: {
                    src: 'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
                    alt: 'Peter avatar photo'
                },
                id: 4,
                name: 'Peter'
            },
            {
                image: {
                    src: 'https://picturepan2.github.io/spectre/img/avatar-2.png',
                    alt: 'Alex avatar photo'
                },
                id: 5,
                name: 'Alex'
            }
        ]

    }
}

export default state