document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');

    // Datos de videos (rutas locales)
    const videos = [
        {
            title: 'Comunicación Efectiva',
            description: 'Aprende cómo comunicarte mejor en situaciones cotidianas.',
            src: 'assets/videos/video1.mp4',
        },
        {
            title: 'Tecnología y Comunicación',
            description: 'Explora cómo la tecnología mejora la conexión entre personas.',
            src: 'assets/videos/video2.mp4',
        },
    ];

    // Renderizar videos dinámicamente
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'card';

        videoCard.innerHTML = `
            <video controls>
                <source src="${video.src}" type="video/mp4">
                Tu navegador no soporta la reproducción de videos.
            </video>
            <h3>${video.title}</h3>
            <p>${video.description}</p>
        `;

        videoContainer.appendChild(videoCard);
    });
});