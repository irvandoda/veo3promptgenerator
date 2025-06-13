// This file will contain the JavaScript logic for the prompt generator. 

document.addEventListener('DOMContentLoaded', () => {

    const cameraMotions = [
        { en: '360 Orbit', id: '360 Orbit (Orbit 360 Derajat)' },
        { en: '3D Rotation', id: '3D Rotation (Rotasi 3D)' },
        { en: 'Action Run', id: 'Action Run (Lari Aksi)' },
        { en: 'Agent Reveal', id: 'Agent Reveal (Penampakan Agen)' },
        { en: 'Angel Wings', id: 'Angel Wings (Sayap Malaikat)' },
        { en: 'Arc Left', id: 'Arc Left (Melingkar ke Kiri)' },
        { en: 'Arc Right', id: 'Arc Right (Melingkar ke Kanan)' },
        { en: 'Bloom Mouth', id: 'Bloom Mouth (Mulut Merekah)' },
        { en: 'Buckle Up', id: 'Buckle Up (Bersiap)' },
        { en: 'Building Explosion', id: 'Building Explosion (Ledakan Gedung)' },
        { en: 'Bullet Time', id: 'Bullet Time (Waktu Peluru)' },
        { en: 'Car Chasing', id: 'Car Chasing (Kejar-kejaran Mobil)' },
        { en: 'Car Explosion', id: 'Car Explosion (Ledakan Mobil)' },
        { en: 'Car Grip', id: 'Car Grip (Cengkeraman Mobil)' },
        { en: 'Crane Down', id: 'Crane Down (Derek Turun)' },
        { en: 'Crane Up', id: 'Crane Up (Derek Naik)' },
        { en: 'Crane Over The Head', id: 'Crane Over The Head (Derek di Atas Kepala)' },
        { en: 'Crash Zoom In', id: 'Crash Zoom In (Zoom Masuk Cepat)' },
        { en: 'Crash Zoom Out', id: 'Crash Zoom Out (Zoom Keluar Cepat)' },
        { en: 'Datamosh', id: 'Datamosh (Datamosh)' },
        { en: 'Dirty Lens', id: 'Dirty Lens (Lensa Kotor)' },
        { en: 'Disintegration', id: 'Disintegration (Disintegrasi)' },
        { en: 'Dolly In', id: 'Dolly In (Dolly Masuk)' },
        { en: 'Dolly Left', id: 'Dolly Left (Dolly ke Kiri)' },
        { en: 'Dolly Out', id: 'Dolly Out (Dolly Keluar)' },
        { en: 'Dolly Right', id: 'Dolly Right (Dolly ke Kanan)' },
        { en: 'Dolly Zoom In', id: 'Dolly Zoom In (Dolly Zoom Masuk)' },
        { en: 'Dolly Zoom Out', id: 'Dolly Zoom Out (Dolly Zoom Keluar)' },
        { en: 'Double Dolly', id: 'Double Dolly (Dolly Ganda)' },
        { en: 'Dutch Angle', id: 'Dutch Angle (Sudut Belanda)' },
        { en: 'Eyes In', id: 'Eyes In (Mata Masuk)' },
        { en: 'Face Punch', id: 'Face Punch (Pukulan Wajah)' },
        { en: 'Fisheye', id: 'Fisheye (Mata Ikan)' },
        { en: 'Floating Fish', id: 'Floating Fish (Ikan Melayang)' },
        { en: 'Flood', id: 'Flood (Banjir)' },
        { en: 'Floral Eyes', id: 'Floral Eyes (Mata Bunga)' },
        { en: 'Flying', id: 'Flying (Terbang)' },
        { en: 'Focus Change', id: 'Focus Change (Perubahan Fokus)' },
        { en: 'FPV Drone', id: 'FPV Drone (Drone FPV)' },
        { en: 'Garden Bloom', id: 'Garden Bloom (Taman Merekah)' },
        { en: 'General', id: 'General (Umum)' },
        { en: 'Glam', id: 'Glam (Glamor)' },
        { en: 'Glowshift', id: 'Glowshift (Pergeseran Cahaya)' },
        { en: 'Handheld', id: 'Handheld (Genggam)' },
        { en: 'Head Explosion', id: 'Head Explosion (Ledakan Kepala)' },
        { en: 'Head Tracking', id: 'Head Tracking (Pelacakan Kepala)' },
        { en: 'Hyperlapse', id: 'Hyperlapse (Selang Waktu Hiper)' },
        { en: 'Incline', id: 'Incline (Miring)' },
        { en: 'Invisible', id: 'Invisible (Tak Terlihat)' },
        { en: 'Jelly Drift', id: 'Jelly Drift (Goyangan Jeli)' },
        { en: 'Jib Down', id: 'Jib Down (Jib Turun)' },
        { en: 'Jib Up', id: 'Jib Up (Jib Naik)' },
        { en: 'Kiss', id: 'Kiss (Ciuman)' },
        { en: 'Lazy Susan', id: 'Lazy Susan (Lazy Susan)' },
        { en: 'Lens Crack', id: 'Lens Crack (Lensa Retak)' },
        { en: 'Lens Flare', id: 'Lens Flare (Suar Lensa)' },
        { en: 'Levitation', id: 'Levitation (Levitasi)' },
        { en: 'Low Shutter', id: 'Low Shutter (Rana Lambat)' },
        { en: 'Medusa Gorgona', id: 'Medusa Gorgona (Medusa Gorgon)' },
        { en: 'Melting', id: 'Melting (Meleleh)' },
        { en: 'Morphskin', id: 'Morphskin (Perubahan Kulit)' },
        { en: 'Mouth In', id: 'Mouth In (Mulut Masuk)' },
        { en: 'Pan Left', id: 'Pan Left (Geser ke Kiri)' },
        { en: 'Pan Right', id: 'Pan Right (Geser ke Kanan)' },
        { en: 'Push To Glass', id: 'Push To Glass (Dorong ke Kaca)' },
        { en: 'Rap Flex', id: 'Rap Flex (Gaya Rap)' },
        { en: 'Robo Arm', id: 'Robo Arm (Lengan Robot)' },
        { en: 'Set on Fire', id: 'Set on Fire (Terbakar)' },
        { en: 'Skin Surge', id: 'Skin Surge (Lonjakan Kulit)' },
        { en: 'Snorricam', id: 'Snorricam (Snorricam)' },
        { en: 'Soul Jump', id: 'Soul Jump (Lompatan Jiwa)' },
        { en: 'Static', id: 'Static (Statis)' },
        { en: 'Super Dolly In', id: 'Super Dolly In (Super Dolly Masuk)' },
        { en: 'Super Dolly Out', id: 'Super Dolly Out (Super Dolly Keluar)' },
        { en: 'Symbiote', id: 'Symbiote (Simbiosis)' },
        { en: 'Tentacles', id: 'Tentacles (Tentakel)' },
        { en: 'Thunder God', id: 'Thunder God (Dewa Petir)' },
        { en: 'Tilt Down', id: 'Tilt Down (Miring ke Bawah)' },
        { en: 'Tilt Up', id: 'Tilt Up (Miring ke Atas)' },
        { en: 'Timelapse Human', id: 'Timelapse Human (Selang Waktu Manusia)' },
        { en: 'Timelapse Landscape', id: 'Timelapse Landscape (Selang Waktu Pemandangan)' },
        { en: 'Tracking Shot', id: 'Tracking Shot (Tembakan Mengikuti)' },
        { en: 'Turning Metal', id: 'Turning Metal (Logam Berputar)' },
        { en: 'Whip Pan', id: 'Whip Pan (Geser Cepat)' },
        { en: 'Wiggle', id: 'Wiggle (Bergoyang)' },
        { en: 'Wind to Face', id: 'Wind to Face (Angin ke Wajah)' },
        { en: 'YoYo Zoom', id: 'YoYo Zoom (Zoom YoYo)' },
        { en: 'Zoom In', id: 'Zoom In (Perbesar)' },
        { en: 'Zoom Out', id: 'Zoom Out (Perkecil)' },
    ];

    const cameraSelect = document.getElementById('gerakan_kamera');
    cameraMotions.forEach(motion => {
        const option = document.createElement('option');
        option.value = motion.en;
        option.textContent = motion.id;
        cameraSelect.appendChild(option);
    });

    const getElementValue = id => document.getElementById(id).value.trim();

    const generatePrompt = () => {
        // --- Get all values ---
        const judul = getElementValue('judul_scene');
        const karakter = getElementValue('deskripsi_karakter');
        const suara = getElementValue('detail_suara');
        const aksi = getElementValue('aksi_karakter');
        const ekspresi = getElementValue('ekspresi_karakter');
        const latar = getElementValue('latar_tempat_waktu');
        const gerakanKameraValue = getElementValue('gerakan_kamera');
        const detailVisual = getElementValue('detail_visual_tambahan');
        const suasana = getElementValue('suasana');
        const suaraLingkungan = getElementValue('suara_lingkungan');
        const dialog = getElementValue('dialog_karakter');
        const negative = getElementValue('negative_prompt');

        // --- Indonesian Prompt ---
        let promptIndonesia = `**Judul Scene:** ${judul}\n\n`;
        promptIndonesia += `**Karakter:**\n${karakter}\n\n`;
        promptIndonesia += `**Detail Suara:**\n${suara}\n\n`;
        promptIndonesia += `**Aksi:**\n${aksi}\n\n`;
        promptIndonesia += `**Ekspresi:**\n${ekspresi}\n\n`;
        promptIndonesia += `**Latar:**\n${latar}\n\n`;
        promptIndonesia += `**Detail Visual:**\nGerakan Kamera: ${gerakanKameraValue}.\n${detailVisual}\n\n`;
        promptIndonesia += `**Suasana:**\n${suasana}\n\n`;
        promptIndonesia += `**Suara Lingkungan:**\n${suaraLingkungan}\n\n`;
        promptIndonesia += `**Dialog:**\n${dialog}\n\n`;
        promptIndonesia += `**Negative Prompt:**\n${negative}`;

        document.getElementById('output-indonesia').value = promptIndonesia;

        // --- English Prompt ---
        let promptInggris = `**Scene Title:** ${judul}\n\n`;
        promptInggris += `**Character:**\n${karakter}\n\n`;
        promptInggris += `**Voice Details:**\n${suara}\n\n`;
        promptInggris += `**Action:**\n${aksi}\n\n`;
        promptInggris += `**Expression:**\n${ekspresi}\n\n`;
        promptInggris += `**Setting:**\n${latar}\n\n`;
        promptInggris += `**Visual Details:**\nCamera Movement: ${gerakanKameraValue}.\n${detailVisual}\n\n`;
        promptInggris += `**Atmosphere:**\n${suasana}\n\n`;
        promptInggris += `**Ambient Sound:**\n${suaraLingkungan}\n\n`;
        // Dialog remains in Indonesian as requested
        promptInggris += `**Dialogue (As Spoken):**\n${dialog}\n\n`; 
        promptInggris += `**Negative Prompt:**\n${negative}`;

        document.getElementById('output-inggris').value = promptInggris;
    };

    const changeTitle = () => {
        const newTitle = getElementValue('title-changer');
        if (newTitle) {
            document.getElementById('main-title').textContent = newTitle;
        }
    };

    const changeStyle = () => {
        const styleText = getElementValue('style-changer');
        if (!styleText) return;

        const visualDetailsInput = document.getElementById('detail_visual_tambahan');
        const currentDetails = visualDetailsInput.value;
        const styleLine = `Gaya Video/Art Style: cinematic realistis dengan kombinasi warna dominan ${styleText}.`;

        // Check if a style line already exists and replace it, otherwise add it.
        if (currentDetails.match(/Gaya Video\/Art Style:/i)) {
            visualDetailsInput.value = currentDetails.replace(/Gaya Video\/Art Style:.*(\r\n|\r|\n)?/i, styleLine + '\n');
        } else {
            visualDetailsInput.value = `${currentDetails}\n${styleLine}`;
        }
    };

    const clearOutputs = () => {
        document.getElementById('output-indonesia').value = '';
        document.getElementById('output-inggris').value = '';
    };

    // --- Event Listeners ---
    document.getElementById('generate-btn').addEventListener('click', generatePrompt);
    document.getElementById('change-title-btn').addEventListener('click', changeTitle);
    document.getElementById('change-style-btn').addEventListener('click', changeStyle);
    document.getElementById('reset-btn').addEventListener('click', clearOutputs);
}); 
