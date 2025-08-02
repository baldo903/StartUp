import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
	let component: HelloWorldComponent;

	beforeEach(() => {
		component = new HelloWorldComponent();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should return "Hello, World!"', () => {
		expect(component.sayHello()).toEqual('Hello, World!');
	});
