import { createClient } from '@supabase/supabase-js';

const apiUrl = process.env.REACT_APP_IMG_SERVER_ENDPOINT
const apiKey = process.env.REACT_APP_IMG_SERVER_THROWAWAY_SERVICE_KEY

const supabase = createClient(apiUrl, apiKey)

export const downloadFile = async (source, file) => {
  return await supabase.storage.from(source).download(file).then(res => {
    return URL.createObjectURL(res.data)
  })
}

export const replaceFile = async (destination, file, name) => {
  await supabase.storage.from(destination).remove(name)
  return supabase.storage.from(destination).upload(name, file)
}