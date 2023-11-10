import { Channel } from "amqplib";

import { BaseEvent } from "./base-event";

/**
 * this is the base publisher class that all publishers should extend
 * @property subject the subject of the event that is used to publish and subscribe to events
 * @property channel the channel that is used to publish events
 * @method publish this method is used to publish events
 */
abstract class Publisher<T extends BaseEvent> {
    abstract subject: T["subject"];

    constructor(protected readonly channel: Channel) { }

    /**
     * this method is used to publish events
     * @param data the data of the event
     * @returns the promise of void
     */
    publish(data: T["data"]): Promise<void> {

        return new Promise((resolve, reject) => {
            this.channel
                .assertExchange(this.subject, "topic", { durable: true })
                .then(() => {
                    console.debug("Queue available to publish: ", this.subject);

                    this.channel.publish(this.subject, "", Buffer.from(JSON.stringify(data)), { persistent: true });

                    console.info("Event published to queue: ", this.subject);
                    console.debug("Event data: ", data);

                    resolve();
                })
                .catch((err) => {
                    console.error("Failed to create queue: ", this.subject);
                    reject(err);
                });
        });
    }
}

export { Publisher };
