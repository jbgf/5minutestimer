import { addPathSuffix } from "@/util"

export const generateMeditationPath = (data: {durationNum: string}) => {
  const link = `/5-minute-meditation-timer/${data.durationNum}`
  return addPathSuffix(link)
}
export const generateHomePath = (data:{durationNum: string}) => {
  const link = `/${data.durationNum}`
  return addPathSuffix(link);
}

export const generatePath = (data:{type?: string,durationNum: string}) => {
  const link = `/${data?.type ? `${data?.type}/` : ''}${data.durationNum}`
  return addPathSuffix(link);
}
export const getLinkTitle = (data: {title: string, durationNum: string}) => data?.title?.replace(`{$}`, data?.durationNum)

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}