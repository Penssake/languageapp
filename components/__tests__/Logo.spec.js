import { shallowMount } from "@vue/test-utils";
import Logo from "../Logo";


const factory = () => {
    return shallowMount(Logo, {
    });
};

describe("Logo", () => {
    const wrapper = factory();
    it('is instantiated', () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it("renders properly", () => {
        const wrapper = factory();
        expect(wrapper.html()).toMatchSnapshot();
    });
});