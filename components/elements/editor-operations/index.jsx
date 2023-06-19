import { useRecoilState } from "recoil";

import { tonesAtom } from "@/recoil/atom/tonesAtom";

import WindTurbine from "@/components/icons/wind-turbine";
import Button from "../button";
import SelectBox from "../select-box";

const EditorOperations = (props) => {

    const { setEditorValue } = props;

    const [tones, setTones] = useRecoilState(tonesAtom);

    const onGenerateClick = () => {
        setEditorValue('We have generated content from the AI...')
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label for="tone" class="text-slate-500">Select an option</label>
                <SelectBox value="tone" options={tones} />
            </div>
            <Button type="primary" onClick={() => onGenerateClick()}>
                <WindTurbine classes="w-3 h-3" /> Generate
            </Button>
        </div>
    )
}

export default EditorOperations;