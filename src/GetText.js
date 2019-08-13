export default () =>{
    const texts = [
        'Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.',
        'If you want to forget something or someone, never hate it, or never hate him/her. Everything and everyone that you hate is engraved upon your heart; if you want to let go of something, if you want to forget, you cannot hate.',
        'Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart.',
        'You will find that it is necessary to let things go; simply for the reason that they are heavy. So let them go, let go of them. I tie no weights to my ankles.',
        'I have come to accept the feeling of not knowing where I am going. And I have trained myself to love it. Because it is only when we are suspended in mid-air with no landing in sight, that we force our wings to unravel and alas begin our flight. And as we fly, we still may not know where we are going to. But the miracle is in the unfolding of the wings. You may not know where you\'re going, but you know that so long as you spread your wings, the winds will carry you.'
    ]

    return texts[Math.floor(Math.random()*texts.length)]
}