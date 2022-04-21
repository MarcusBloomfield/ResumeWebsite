import FloatingIsland from '../Models/FloatingIsland.js'
import LittleHouse from '../Models/LittleHouse.js'
import Deer from '../Models/Deer.js'
import DeerF from '../Models/DeerF.js'
import SingleEngine from '../Models/SingleEngine'
import FlyingJet from '../Models/FlyingJet.js'
import ILOVEPROGRAMMING from '../Models/ILOVEPROGRAMMING.js'
import HideTent from '../Models/HideTent.js'
import Billboard from '../Models/BillBoard.js';
import PCSetupIsland from '../Models/PCSetupIsland.js'
import FarmerMarcus from '../Models/FarmerMarcus.js'
import TwoStory from '../Models/TwoStory.js'
import MusketMan from '../Models/MusketMan.js'
import MinerMarcus from '../Models/MinerMarcus.js'
import MinerIsland from '../Models/MinerIsland.js'

export default function Decoration() {
    return <>
        <PCSetupIsland position={[-3, 0, 0]} scale={[.5, .5, .5]} rotationAmount={-.002} yOrigin={0} />
        <FloatingIsland position={[-3.5, 1, 0]} rotationAmount={-.002} yOrigin={1} />
        <FloatingIsland position={[-3.5, -1, 0]} rotationAmount={-.002} yOrigin={-1} />
        <LittleHouse position={[4, 0, 0]} />
        <Deer position={[21.2, .87, -12.5]} />
        <DeerF position={[21, .87, -12.5]} />
        <HideTent position={[22, 1.51, -13.8]} />
        <TwoStory position={[22.7, 1.48, -13.2]} rotation={[0, -.8, 0]} />
        <SingleEngine position={[4, 1.7, 0]} rotationAmount={0.001} />
        <FlyingJet position={[-7, -1, 3]} xOffset={0} zOffset={0} />
        <ILOVEPROGRAMMING yOrigin={5} />
        <Billboard position={[5, -3, 4]} rotation={[0, -2, 0]} scale={[.5, .5, .5]} yOrigin={-3} />
        <FarmerMarcus position={[22.1, 1.51, -13.2]} rotation={[0, -.3, 0]} />
        <MusketMan position={[22.4, 1.51, -12.9]} />
        <MinerMarcus position={[22.8, 1.51, -12.4]} />
        <MinerIsland position={[20, 0, -15]} yOrigin={0} />
    </>
}