document.getElementById('tampil').onclick = function () {
    var nama = document.getElementById('nama').value.trim();
    if (nama === "") {
        nama = "(Nama harus diisi)";
    }
    var kelas = document.getElementById('kelas').value.trim();
    if (kelas === "") {
        kelas = "(Kelas harus diisi)";
    }
    var sports = document.getElementsByName('sport');
    var sport = "";

    for (var i = 0; i < sports.length; i++) {
        if (sports[i].checked) {
            sport += sports[i].value + ", ";
        }
    }

    if (sport === "") {
        sport = "(Ekstrakurikuler belum diisi)";
    }
    var waktus = document.getElementsByName('waktu');
    var waktu = "";

    for (var i = 0; i < waktus.length; i++) {
        if (waktus[i].checked) {
            waktu = waktus[i].value;
            break;
        }
    }

    if (waktu === "") {
        waktu = "(Waktu belum diisi)";
    }

    var show = "Nama: " + nama +"\nKelas: " + kelas +"\nEkstrakurikuler: " + sport +"\nWaktu: " + waktu;
	document.getElementById('hasil').innerText = show;
};
	document.getElementById('reset').onclick = function () {
		document.getElementById('nama').value = "";
		document.getElementById('kelas').value = "";

		var sports = document.getElementsByName('sport');
		for (var i = 0; i < sports.length; i++) {
			sports[i].checked = false;
		}

		var waktus = document.getElementsByName('waktu');
		for (var i = 0; i < waktus.length; i++) {
			waktus[i].checked = false;
		}

		document.getElementById('hasil').innerText = "";
	};