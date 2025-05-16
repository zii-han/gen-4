const nama = ["Abdan", "Afdal", "Fauzan", "Farhan"];

        function check() {
            const input = document.getElementById("search-box").value.trim().toLowerCase();
            let bestMatch = "";
            let highestSimilarity = 0;

            // Cari kemiripan terbaik
            nama.forEach(dbItem => {
                const similarity = calculateSimilarity(input, dbItem);
                if (similarity > highestSimilarity) {
                    highestSimilarity = similarity;
                    bestMatch = dbItem;
                }
            });

            // Tampilkan alert jika ada kemiripan cukup tinggi (contoh: >60%)
            if (highestSimilarity > 0 && input !== bestMatch) {
                var confirmasi = confirm(`Mungkin maksud Anda: ${bestMatch}\nTingkat kemiripan: ${Math.round(highestSimilarity)}%`);
                if (confirm) {
                  input.value = "${bestMatch}\n";
                }
                else {
                  alert("Baik, Silahkan ketik yang lain...");
                  clear();
                }
            }
        }

        // Fungsi menghitung kemiripan (Levenshtein Distance sederhana)
        function calculateSimilarity(str1, str2) {
            const longer = str1.length > str2.length ? str1 : str2;
            const shorter = str1.length > str2.length ? str2 : str1;
            const longerLength = longer.length;

            if (longerLength === 0) return 100; // Kedua string kosong

            // Hitung jarak edit (Levenshtein distance)
            const distance = levenshteinDistance(str1, str2);
            
            // Hitung persentase kemiripan
            return (1 - distance / longerLength) * 100;
        }

        // Algoritma Levenshtein Distance
        function levenshteinDistance(s, t) {
            if (s === t) return 0;
            if (s.length === 0) return t.length;
            if (t.length === 0) return s.length;

            const matrix = [];

            // Inisialisasi matriks
            for (let i = 0; i <= s.length; i++) {
                matrix[i] = [i];
            }

            for (let j = 0; j <= t.length; j++) {
                matrix[0][j] = j;
            }

            // Isi matriks
            for (let i = 1; i <= s.length; i++) {
                for (let j = 1; j <= t.length; j++) {
                    const cost = s.charAt(i - 1) === t.charAt(j - 1) ? 0 : 1;
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j] + 1,     // Deletion
                        matrix[i][j - 1] + 1,     // Insertion
                        matrix[i - 1][j - 1] + cost  // Substitution
                    );
                }
            }

            return matrix[s.length][t.length];
        }
    