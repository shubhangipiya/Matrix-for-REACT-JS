/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { ReactNode, useContext, useEffect } from "react";

import { AuthHeaderContext } from "./AuthHeaderContext";
import { AuthHeaderActionType } from "./AuthHeaderProvider";

interface Props {
    title: ReactNode;
    icon?: ReactNode;
    hideServerPicker?: boolean;
}

export function AuthHeaderModifier(props: Props): null {
    const context = useContext(AuthHeaderContext);
    const dispatch = context ? context.dispatch : null;
    useEffect(() => {
        if (!dispatch) {
            return;
        }
        dispatch({ type: AuthHeaderActionType.Add, value: props });
        return () => dispatch({ type: AuthHeaderActionType.Remove, value: props });
    }, [props, dispatch]);
    return null;
}
