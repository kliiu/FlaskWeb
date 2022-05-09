"""empty message

Revision ID: ff1497645b2d
Revises: 98c43afe3a8f
Create Date: 2018-09-17 20:33:46.084140

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ff1497645b2d'
down_revision = '98c43afe3a8f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('group_manage',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('group_id', sa.Integer(), nullable=True),
    sa.Column('author_id', sa.String(length=150), nullable=True),
    sa.ForeignKeyConstraint(['author_id'], ['front_user.id'], ),
    sa.ForeignKeyConstraint(['group_id'], ['group.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('group_manage')
    # ### end Alembic commands ###
