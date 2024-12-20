import { dataI } from "../store/reducers/table.slice";

export default function downloadJSON(data: dataI) {
    let downloadData = JSON.stringify(data);
    const fileName = "myfile.json";

    const blob = new Blob([downloadData], { type: "application/json" });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;

    link.click();

    window.URL.revokeObjectURL(url);
}

// export async function sendTelegramMessage(text: string) {
//     try {
//         await fetch(
//             `https://api.telegram.org/bot5448516005:AAEbVS6ubj7K71wGRW8LlijuKq2N2M3bo0k/sendMessage`,
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     text,
//                     disable_web_page_preview: true,
//                     disable_notification: false,
//                     parse_mode: "html",
//                     chat_id: "335761389",
//                 }),
//             },
//         );
//     } catch (err) {
//         console.log(err);
//     }
// }
