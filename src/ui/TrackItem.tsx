import type { TrackListItemOutput } from "../dal/api.ts"
import clsx from 'clsx'
import styles from './TrackList.module.css'

type Props = {
  onSelect: (trackId: string) => void,
  track: TrackListItemOutput,
  isSelected: boolean,
}

export function TrackItem({onSelect, track, isSelected}: Props) {
  const handleClick = () => {
    onSelect?.(track.id)
  } 

  const className = clsx({
    [styles.track]: true,
    [styles.selected]: isSelected
  })

  return (
    <li className={className} key={track.id}>
      <div onClick={handleClick}>
        {track.attributes.title}
      </div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  )
}