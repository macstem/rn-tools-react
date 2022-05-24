import React from "react";

const Train = (name) => {
    return (
        <div className="train" data-id="2" style="">
            <div className="train-data">
                <div className="image">
                    <img src="https://mats.yum.pl/wp-content/themes/rn/img/trains/swallow.png" alt="" />
                </div>
                <div className="name" data-train="swallow">
                    Swallow
                    <span>era 1</span>
                </div>
                <div className="slots">1</div>
            </div>
            <div className="vouchers">
                <div data-value="20" data-number="0" className="speed" title="Bon na przyspieszenie">
                    <i></i>
                    <span>+20</span>
                    <p className="start"></p>
                </div>
            </div>
            <div className="train-stats">
                <div className="total">
                    <div className="tractive_force">
                        <i></i>
                        <span>2</span>
                    </div>
                    <div className="reliability">
                        <i></i>
                        <span>50</span>
                    </div>
                    <div className="acceleration">
                        <i></i>
                        <span>14</span>
                    </div>
                    <div className="speed">
                        <i></i>
                        <span>50</span>
                    </div>
                </div>
                <div className="upgAll" title="Ulepsz wszystko / Odznacz wszystko">upgAll</div>
                <div className="upgrades">
                    <div className="tractive_force">
                        <div data-value="1" data-upgrade="tractive_force" data-number="0">
                            <i></i>
                            <span>+1</span>
                            <p className="start"></p>
                        </div>
                    </div>
                    <div className="reliability">
                        <div data-value="20" data-upgrade="reliability" data-number="0">
                            <i></i>
                            <span>+20</span>
                            <p className="start"></p>
                        </div>
                    </div>
                    <div className="acceleration">
                        <div data-value="4" data-upgrade="acceleration" data-number="0">
                            <i></i>
                            <span>+4</span>
                            <p className="start"></p>
                        </div>
                    </div>
                    <div className="speed">
                        <div data-value="10" data-upgrade="speed" data-number="0">
                            <i></i>
                            <span>+10</span>
                            <p className="start"></p>
                        </div>
                    </div>
                </div>
                <div className="condition">
                    <label>Condition:</label>
                    <input 
                        className="cond form-control" 
                        type="number" 
                        min="0" 
                        max="100" 
                        step="1" 
                        value="100"
                    />
                </div>
            </div>
            <div className="remove"></div>
        </div>  
    );
}

export default Train;