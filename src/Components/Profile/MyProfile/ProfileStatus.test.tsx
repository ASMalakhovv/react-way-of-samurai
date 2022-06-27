import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus  profileStatus="" status="hello" updateStatus={()=>{}}/>);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance?.state.status).toBe("hello");
    });
    test("after creation input shouldn`t be displayed", () => {
        const component = create(<ProfileStatus  profileStatus="" status="hello" updateStatus={()=>{}}/>);
        const root = component.root;
        expect(()=>{
            const input = root.findByType("input")
        }).toThrow();
    });
    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus  profileStatus="" status="hello" updateStatus={()=>{}}/>);
        const root = component.root;
        const span = root.findByType("span")
        expect(span.children[0]).toBe("hello")
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus  profileStatus="" status="hello" updateStatus={()=>{}}/>);
        const root = component.root;
        const span = root.findByType("span")
        span.props.onDoubleClick()
        const input = root.findByType("input")
        // @ts-ignore
        expect(input.props.value).toBe("hello")
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus profileStatus={''} status={''} updateStatus={mockCallback} />)
        const instance = component.getInstance();
        // @ts-ignore
        instance.editInput();
        expect(mockCallback.mock.calls.length).toBe(1)
    });
});
