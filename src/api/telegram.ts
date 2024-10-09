const baseUrl: string | undefined = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const chatId: string | undefined = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

export const sendMessage = async (message: string): Promise<void> => {
  const url: string = `${baseUrl}sendMessage?chat_id=${chatId}&text=${message}`;
  await fetch(url);
};
