import AreaEntranceSeparator from "./AreaEntranceSeparator";
import EntranceTypes from "./DataObjects/EntranceTypes";
import Areas from "./DataObjects/AreasAndEntrances";
import React from "react";
import Houses from "./DataObjects/Houses";

export default class Entrance extends React.Component {

    setLocation = event => {
        let area = this.props.area;
        let entrance = this.props.entrance;
        let selection = event.target.value;
        let type = Areas[area][entrance].type;
        if (type === EntranceTypes.Overworld) {
            this.props.setOverworldToOverworld(area, entrance, selection);
        } else if (type === EntranceTypes.KaeporaGaebora) {
            this.props.setKaeporaGaeboraEntrance(area, entrance, selection);
        } else {
            this.props.setInteriorToAreaAndEntrance(area, entrance, selection);
        }
    };

    resetEntrance = () => {
        let area = this.props.area;
        let entrance = this.props.entrance;
        let interior = this.props.interior;
        let type = Areas[area][entrance].type;
        if (type === EntranceTypes.Overworld) {
            this.props.resetOverworldEntrance(area, entrance, interior);
        } else if (type === EntranceTypes.KaeporaGaebora) {
            this.props.resetKaeporaGaeboraEntrance(area, entrance, interior);
        } else {
            this.props.resetEntrance(area, entrance, interior);
        }
    };

    render() {
        let availableLocations = this.props.availableLocations;
        let area = this.props.area;
        let entrance = this.props.entrance;
        let interior = this.props.interior;
        return(
            <div>
                <h5 className="is-size-5">{entrance}</h5>
                {interior !== "" ?
                    <div className="interior-display">
                        <span>{interior}</span>
                        {/* once Link's House is set, leave it */}
                        {interior === Houses.LinksHouse ?
                            "" :
                            <span className="delete is-pulled-right" onClick={this.resetEntrance}>x</span>
                        }
                    </div> :
                    <div className="select is-small">
                        <select className="" onChange={this.setLocation}>
                            <option className="input" value={"Not Checked"}>Not Checked</option>
                            {availableLocations.map((location, i) => {
                                if (Areas[area][entrance].type === EntranceTypes.Overworld &&
                                    location === `${area}${AreaEntranceSeparator}${entrance}`) {
                                    return null;
                                }
                                return <option key={i} value={location}>{location}</option>
                            })}
                        </select>
                    </div>
                }
            </div>
        )
    }
}
