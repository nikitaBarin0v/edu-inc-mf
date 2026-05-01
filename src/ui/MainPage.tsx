import { TrackDetail } from "./TrackDetail.tsx";
import { TrackList } from "./TrackList.tsx";
import { useTrackSelection } from "../bll/useTrackSelection.tsx";

export function MainPage() {
  const {trackId, setTrackId} = useTrackSelection();
  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id);
  }

  return <div>
    <div style={{display: 'flex'}}>
      <h1>MusicFun Player</h1>
      <TrackList onTrackSelect={handleTrackSelect} selectedTrackId={trackId} />
      <TrackDetail trackId={trackId} />
    </div>
  </div>
}