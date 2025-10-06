import { useContext, useRef, useState } from "react";
import { queryPlanetaryNavigationAssistant } from "../AIHelper";
import { MapContext } from "../main.tsx";

export default function NavigationPanel() {
  const { map } = useContext(MapContext);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [navigationTextResponse, setNavigationTextResponse] = useState<string | null>(null);

  async function submitNavigationQuery() {
    if (!dialogRef.current || !inputRef.current) {
      console.error('I seem to have encountered an impossible state. Please try again later.');
      return;
    }
    console.log(map);
    dialogRef.current?.close();
    if (!map) {
      alert('Map not loaded yet. Please try again later.');
      return;
    }

    setLoading(true);
    setNavigationTextResponse(null);
    const response = await queryPlanetaryNavigationAssistant({ planet: 'moon', feature: inputRef.current?.value || '' });
    setLoading(false);
    switch (response.localError) {
      case 'inputTooLong':
        alert('Input too long. Please limit to 1000 characters.');
        break;
      case 'inputTooShort':
        alert('Input cannot be empty. Please enter a feature name.');
        break;
      default:
        break;
    }

    if (response.networkError) {
      alert('Network error. Please try again later.');
      return;
    }

    if (
      !response.response?.foundFeature || 
      !response.response?.latitude || 
      !response.response?.longitude
    ) {
      alert('Could not find feature. Please try a different query.');
      setNavigationTextResponse(response.response?.textResponse || 'Could not find feature.');
      return;
    }

    map.getView().animate({
      center: [response.response.longitude, response.response.latitude],
      zoom: response.response.zoomLevel || 8,
      duration: 2000,
    });
    setNavigationTextResponse(response.response.textResponse);

    dialogRef.current?.close();
  }

  return (
    <>
      <div className="panel">
        <h1>Project P Planetary Explorer</h1>
        <p>Explore the wonders of the solar system! Feel free to ask Perry, our AI assistant, for help.</p>
        <button className="modern-button" onClick={() => dialogRef.current?.showModal()}>Navigation Assistant 🪐</button>
        {loading && <p>Loading...</p>}
        {navigationTextResponse && 
          <>
            <hr />
            <p>{navigationTextResponse}</p>
            <button className="modern-button" onClick={() => setNavigationTextResponse(null)}>Clear</button>
          </>
        }
      </div>

      <dialog ref={dialogRef} id="panelDialog">
        <h2 id="featureName">Planetary Navigation Assisant 🪐</h2>
        <p id="featureDescription">Tell me where you want to go, and I'll take you there!</p>
        <textarea ref={inputRef} id="navFeatureTextArea" placeholder="Enter feature name" />
        <button className="modern-button" style={{ marginLeft: '10px' }} onClick={submitNavigationQuery}>Submit</button>
        <hr />
        <button className="modern-button" onClick={() => {
          const dialog = dialogRef.current;
          dialog?.close();
        }}>Close</button>
      </dialog>
    </>
  )
}