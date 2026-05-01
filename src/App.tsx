// import { useEffect, useState } from 'react';

// export function App() {

//   const [ selectedTrackId, setSelectedTrackId ] = useState(null);
//   const [ selectedTrack, setSelectedTrack ] = useState(null);
//   const [tracks, setTracks] = useState(null);

//   useEffect(() => {
//     console.log('Effect')
//     fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
//       headers: {
//         'api-key': '169fd025-ed9e-45ce-a966-96d6aa76e039'
//       }
//     }).then((res) => res.json())
//       .then((json) => setTracks(json.data))
//   }, [])

//   useEffect(() => {
//     if (!selectedTrackId) {
//       return;
//     }

//     fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + selectedTrackId, {
//       headers: {
//         'api-key': '169fd025-ed9e-45ce-a966-96d6aa76e039'
//       }
//     }).then(res => res.json())
//       .then(json => setSelectedTrack(json.data))
//   }, [selectedTrackId])

//   if (tracks === null) {
//     return <div> 
//       <h1>Musicfun Player</h1>
//       <span>loading...</span>
//     </div>
//   }

//   // if (tracks === null) {
//   //   return <div>Loading tracks...</div>
//   // }

//   if (tracks.length === 0) {
//     return <div>
//       <h1>Musicfun Player</h1>
//       <span>no tracks...</span>
//     </div>
//   }

//   // if (tracks.length === 0) {
//   //   return <div>No tracks available</div>
//   // }

//   return (
//     <div>
//       <h1>Musicfun Player</h1>
//       <button onClick={() => {
//         setSelectedTrackId(null);
//         setSelectedTrack(null);
//       }}>reset selection</button>
//       <div style={{
//         display: 'flex',
//         gap: '30px',
//       }}>
//         <ul>
//           {
//             tracks.map((track) => {

//               return (
//                 <li key={track.id} style={ {
//                   border: track.id === selectedTrack?.id ? '1px solid orange' : 'none'
//                 } }>
//                   <div onClick={ () => { 
//                     setSelectedTrackId(track.id)}}>
//                     {track.attributes.title}
//                   </div>
//                   <audio src={track.attributes.attachments[0].url} controls></audio>
//                 </li>
//               )
//             })
//           }
//         </ul>
//         <div>
//           <h3>Details</h3>
//           {!selectedTrack && !selectedTrackId && 'Track is not selected'}
//           {!selectedTrack && selectedTrackId && 'Loading...'}
//           {selectedTrack && selectedTrackId && selectedTrack.id !== selectedTrackId && 'Loading...'}
//           {selectedTrack && <div>
//               <h3>
//                 {selectedTrack.attributes.title}
//               </h3>
//               <h4>Lyrics</h4>
//               <p>
//                 {selectedTrack.attributes.lyrics ?? 'no lyrics'}
//               </p>
//             </div>  
//           }
//         </div>
//       </div>
//     </div>
//   )
// }
