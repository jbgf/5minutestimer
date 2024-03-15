export interface AudioPlayerRef {startPlay: () => void, stopPlay: () => void}

export type Props = {
  params: { duration: string }
  searchParams: { [key: string]: string | string[] | undefined }
}