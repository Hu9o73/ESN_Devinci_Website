import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../ConfigFiles/dbConfig';
import User from './users';

interface EventAttributes {
    id: number;
    title: string;
    category?: string;
    description?: string;
    author: number;
    imageLink?: string;
    active: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

interface EventCreationAttributes extends Optional<EventAttributes, 'id' | 'category' | 'description' | 'imageLink' | 'active'> { }

class Event extends Model<EventAttributes, EventCreationAttributes> implements EventAttributes {
    public id!: number;
    public title!: string;
    public category?: string;
    public description?: string;
    public author!: number;
    public imageLink?: string;
    public active!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        author: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        imageLink: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'events',
        modelName: 'Event',
        timestamps: true, // Sequelize automatically handles createdAt and updatedAt
    }
);

export default Event;